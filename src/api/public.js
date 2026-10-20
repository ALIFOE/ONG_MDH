// Appels du site public vers l'API de l'espace admin.
// Si l'API ne répond pas, le site garde le contenu écrit dans src/data/.

export async function fetchPublic(path) {
  const response = await fetch(`/api/public${path}`, { headers: { Accept: 'application/json' } })
  if (!response.ok) throw new Error(`API ${response.status}`)
  return response.json()
}

// Envoie un formulaire du site ; « fields » est la liste libellé → valeur affichée dans l'admin
export async function sendForm(type, { name, email, phone = '', amount, fields }) {
  let response
  try {
    response = await fetch('/api/public/submissions', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({ type, name, email, phone, amount, fields })
    })
  } catch {
    throw new Error('Impossible de joindre le serveur. Vérifiez votre connexion et réessayez.')
  }
  if (!response.ok) {
    const data = await response.json().catch(() => null)
    throw new Error(data?.error || "Une erreur est survenue lors de l'envoi. Veuillez réessayer ou nous contacter directement.")
  }
}
