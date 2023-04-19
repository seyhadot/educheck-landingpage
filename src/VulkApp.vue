<script setup lang="ts">
import { useLayout } from '/@src/composable/useLayout'

const { LayoutComponent } = useLayout()

useHead({
  title: 'Educheck Cambodia',
  htmlAttrs: {
    lang: 'en-US',
  },
  link: [
    {
      rel: 'icon',
      type: 'image/svg+xml',
      href: '/assets/educheck/logo.png',
    },
    {
      rel: 'alternate icon',
      href: '/favicon.ico',
      type: 'image/x-icon',
    },
    {
      rel: 'apple-touch-icon',
      href: '/apple-touch-icon.png',
    },
  ],
  meta: [
    {
      name: 'Educheck Cambodia',
      content:
        'EduCheck is a modern ERP for School Management System (SMS). EduCheck is an ERP for School Management System (SMS) designed to help school principal, teachers managing their administration, scoring, student profile and follow-up attendance of students. EduCheck also helps parents to receiving inform and information about their children on daily basic. They system is also a tool for school & parent communication to ensure the study of the children. Our system (EduCheck) Is designed in the compliant process to general education system of MoEYS of Cambodia. Our system is comprised of Web Backend, mobile app for both Andriod & IOS. Our mobile app is for management, teachers, students and parents that is on our SMS product. EduCheck is a product of PRIORDIGI and powered by COSMOSDIGITAL.',
    },
    {
      name: 'អុីឌូឈែក ខេមបូឌៀ',
      content:
        'EduCheck គឺជា ERP ទំនើបសម្រាប់ប្រព័ន្ធគ្រប់គ្រងសាលារៀន (SMS)។ EduCheck គឺជា ERP សម្រាប់ប្រព័ន្ធគ្រប់គ្រងសាលារៀន (SMS) ដែលត្រូវបានរចនាឡើងដើម្បីជួយនាយកសាលា គ្រូបង្រៀនគ្រប់គ្រងការគ្រប់គ្រងរបស់ពួកគេ ការដាក់ពិន្ទុ ប្រវត្តិរូបសិស្ស និងការតាមដានវត្តមានរបស់សិស្ស។ EduCheck ក៏ជួយឪពុកម្តាយក្នុងការទទួលបានព័ត៌មាន និងព័ត៌មានអំពីកូនរបស់ពួកគេនៅលើមូលដ្ឋានប្រចាំថ្ងៃផងដែរ។ ប្រព័ន្ធពួកគេក៏ជាឧបករណ៍សម្រាប់ទំនាក់ទំនងសាលារៀន និងឪពុកម្តាយ ដើម្បីធានាដល់ការសិក្សារបស់កុមារ។ ប្រព័ន្ធរបស់យើង (EduCheck) ត្រូវបានរៀបចំឡើងក្នុងដំណើរការអនុលោមតាមប្រព័ន្ធអប់រំទូទៅរបស់ក្រសួងអប់រំ យុវជន និងកីឡាកម្ពុជា។ ប្រព័ន្ធរបស់យើងមានផ្នែកខាងក្រោយគេហទំព័រ កម្មវិធីទូរស័ព្ទសម្រាប់ទាំង Andriod និង IOS ។ កម្មវិធីទូរស័ព្ទរបស់យើងគឺសម្រាប់អ្នកគ្រប់គ្រង គ្រូ សិស្ស និងឪពុកម្តាយដែលមាននៅលើផលិតផល SMS របស់យើង។ EduCheck គឺជាផលិតផលរបស់ PRIORDIGI និងដំណើរការដោយ COSMOSDIGITAL ។',
    },
  ],
  script: [
    {
      children: `(function () {
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
  const settingRe = /color-schema=([^;]+)/
  const setting = localStorage.getItem('color-schema') || 'system'
  if (setting === 'dark' || (prefersDark && setting !== 'light'))
    document.documentElement.classList.toggle('is-dark', true)
})()`,
    },
  ],
})
</script>

<template>
  <component :is="LayoutComponent" />

  <ClientOnly>
    <ReloadPrompt app-name="EduCheck">
      <template #logo>
        <img
          src="../public/assets/educheck/logo.png"
          alt="logo"
          width="80"
          height="80"
        />
      </template>
    </ReloadPrompt>
  </ClientOnly>
</template>
