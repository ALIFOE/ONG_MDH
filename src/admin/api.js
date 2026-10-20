import { reactive } from 'vue'

// Session de l'utilisateur connecté à l'admin
export const session = reactive({
  user: null,
  csrf: '',
  checked: false
})

// Messages de confirmation / d'erreur affichés en bas de l'écran
export const toasts = reactive([])
let toastId = 0

export function notify(message, type = 'success') {
  const id = ++toastId
  toasts.push({ id, message, type })
  setTimeout(() => {
    const index = toasts.findIndex(t => t.id === id)
    if (index !== -1) toasts.splice(index, 1)
  }, type === 'error' ? 6000 : 3500)
}

export class ApiError extends Error {
  constructor(status, message, data = null) {
    super(message)
    this.status = status
    this.data = data
  }
}

export async function api(path, { method = 'GET', body, raw = false } = {}) {
  const isForm = body instanceof FormData
  const headers = { Accept: 'application/json' }
  if (body !== undefined && !isForm) headers['Content-Type'] = 'application/json'
  if (method !== 'GET') headers['X-CSRF-Token'] = session.csrf

  let response
  try {
    response = await fetch(`/api${path}`, {
      method,
      headers,
      credentials: 'same-origin',
      body: isForm ? body : body !== undefined ? JSON.stringify(body) : undefined
    })
  } catch {
    throw new ApiError(0, 'Impossible de joindre le serveur. Vérifiez votre connexion internet.')
  }

  if (raw && response.ok) return response

  const data = await response.json().catch(() => null)
  if (!response.ok) {
    // Session expirée : l'interface renvoie vers la page de connexion
    if (response.status === 401) session.user = null
    throw new ApiError(response.status, data?.error || `Erreur inattendue du serveur (${response.status}).`, data)
  }
  if (data === null) {
    throw new ApiError(response.status, "Réponse invalide du serveur : l'API PHP est-elle bien installée ?")
  }
  return data
}

export async function loadSession() {
  const data = await api('/auth/me')
  session.user = data.user
  session.csrf = data.csrf
  session.checked = true
  return session.user
}

export async function login(email, password) {
  const data = await api('/auth/login', { method: 'POST', body: { email, password } })
  session.user = data.user
  session.csrf = data.csrf
}

export async function logout() {
  const data = await api('/auth/logout', { method: 'POST', body: {} })
  session.user = null
  session.csrf = data.csrf
}

export const isAdmin = () => session.user?.role === 'admin'

// Nombre de nouvelles demandes par formulaire, affiché dans le menu
export const unread = reactive({})

export async function refreshUnread() {
  if (!isAdmin()) return
  try {
    const data = await api('/admin/submissions/unread')
    Object.assign(unread, data.unread)
  } catch {
    // compteur indicatif : une erreur ici ne doit pas bloquer l'interface
  }
}

export async function uploadImage(file) {
  const form = new FormData()
  form.append('file', file)
  const data = await api('/admin/uploads', { method: 'POST', body: form })
  return data.url
}

export async function downloadFile(path) {
  const response = await api(path, { raw: true })
  const disposition = response.headers.get('Content-Disposition') || ''
  const filename = /filename="([^"]+)"/.exec(disposition)?.[1] || 'export.csv'
  const url = URL.createObjectURL(await response.blob())
  const link = document.createElement('a')
  link.href = url
  link.download = filename
  document.body.appendChild(link)
  link.click()
  link.remove()
  URL.revokeObjectURL(url)
}
