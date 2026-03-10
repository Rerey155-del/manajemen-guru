import { ref } from 'vue'

export function useSubjects() {
  const subjects = ref([
    { id: 1, name: 'Mathematics (Advanced)', code: 'MATH-ADV-101', tags: ['Core Curriculum', 'Grade 12'] },
    { id: 2, name: 'Biology & Life Science', code: 'BIO-GEN-204', tags: ['Science Lab', 'Universal'] }
  ])

  return { subjects }
}
