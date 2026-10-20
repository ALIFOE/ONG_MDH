<template>
  <div>
    <PageBanner
      title="Notre équipe"
      :crumbs="[{ label: `L'Organisation`, to: '/association' }, { label: 'Notre équipe' }]"
      :image="images.saoute3"
    />

    <div class="volunteer-section pt-140 lg-pt-80">
      <div class="container">
        <div class="row">
          <div class="col-xxl-9 col-lg-10 m-auto">
            <div class="title-one text-center mb-85 lg-mb-40" data-sal="slide-up" data-sal-duration="900">
              <div class="upper-title">Celles et ceux qui font vivre MDH</div>
              <h2>Une équipe engagée au service des communautés</h2>
              <p class="mt-25">
                Découvrez les membres du Conseil d'Administration, du Bureau Exécutif, ainsi que nos bénévoles et partenaires qui font vivre l'Organisation MDH.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="bg-wrapper">
        <div class="container">
          <template v-for="(group, g) in groups" :key="group.title">
            <h3 class="team-group-title" :class="{ 'mt-80': g > 0 }">{{ group.title }}</h3>
            <div class="row justify-content-center">
              <div v-for="(member, i) in group.members" :key="member.id || member.name" class="col-lg-4 col-md-6">
                <div class="volunteer-block mt-30" data-sal="slide-up" data-sal-duration="900" :data-sal-delay="(i % 3) * 200">
                  <div class="media-wrapper position-relative z-2">
                    <div class="img-meta position-relative z-1 overflow-hidden">
                      <img v-if="member.photo" :src="member.photo" :alt="member.name" class="w-100">
                      <div v-else class="placeholder-photo" aria-hidden="true">{{ initials(member.name) }}</div>
                    </div>
                  </div>
                  <div class="text text-center position-relative z-1">
                    <h5 class="name">{{ member.name }}</h5>
                    <div class="role">{{ member.role }}</div>
                    <p v-if="member.bio">{{ member.bio }}</p>
                  </div>
                </div>
              </div>
            </div>
          </template>
        </div>
      </div>
    </div>

    <!-- Rejoindre -->
    <div class="pt-130 lg-pt-80 pb-130 lg-pb-80 text-center">
      <div class="container">
        <div class="title-one mb-25" data-sal="slide-up" data-sal-duration="900">
          <div class="upper-title">Et pourquoi pas vous ?</div>
          <h2>Rejoignez-nous !</h2>
        </div>
        <div class="row">
          <div class="col-lg-8 m-auto">
            <p class="mb-40">
              Grâce à notre dévouement collectif et à notre équipe de bénévoles, nous accomplissons chaque jour des actions qui changent les vies.
            </p>
          </div>
        </div>
        <router-link to="/rejoindre" class="btn-one">Devenir bénévole</router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import PageBanner from '@/components/PageBanner.vue'
import images from '@/data/images.js'
import { fetchPublic } from '@/api/public.js'

// Équipe d'origine, affichée tant que l'équipe gérée depuis l'admin n'est pas disponible
const staticGroups = [
  {
    title: "Conseil d'Administration (CA)",
    members: [
      // photo: '...' — ajouter un portrait importé depuis src/data/images.js quand il sera disponible
      { name: "Prof N'kERE Komi", role: 'Président', bio: "Enseignant chercheur à l'UL/Kara." },
      { name: 'TOHOULEBA Koboyo', role: 'Secrétaire Général' },
      { name: 'DZOMEDA Adjo Elom', role: 'Trésorière', bio: 'Entrepreneuse.' }
    ]
  },
  {
    title: 'Bureau Exécutif',
    members: [
      { name: 'ATARMILA Saoute', role: 'Directeur Exécutif' },
      { name: 'AGBOKOU Paul', role: 'Assistant Administratif' },
      { name: "N'DAH Lafoh", role: 'Chargé de projet' },
      { name: 'YAKOUBA Djibril', role: 'Comptable' },
      { name: 'Baudoin Kokou ALIFOE', role: 'IT & web support Technician', bio: 'Développeur web mobile.' }
    ]
  }
]

const remoteMembers = ref([])

// Membres de l'admin regroupés dans l'ordre de leur premier membre
const groups = computed(() => {
  if (!remoteMembers.value.length) return staticGroups
  const map = new Map()
  for (const member of remoteMembers.value) {
    if (!map.has(member.group)) map.set(member.group, [])
    map.get(member.group).push(member)
  }
  return [...map].map(([title, members]) => ({ title, members }))
})

onMounted(async () => {
  try {
    remoteMembers.value = (await fetchPublic('/team')).items
  } catch {
    // API indisponible : équipe d'origine
  }
})

const initials = name => name
  .replace(/^Prof\s+/i, '')
  .split(/\s+/)
  .slice(0, 2)
  .map(part => part[0])
  .join('')
  .toUpperCase()
</script>
