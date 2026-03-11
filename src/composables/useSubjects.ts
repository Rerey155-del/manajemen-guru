import { ref } from 'vue'

export function useSubjects() {
  const subjects = ref([
    { id: 1, subject_name: "Mathematics (Advanced)", academic_code: "MATH-ADV-101", metadata: ["Calculus", "Phase 1"] },
    { id: 2, subject_name: "Theoretical Physics", academic_code: "PHYS-THE-202", metadata: ["Quantum", "Senior"] },
    { id: 3, subject_name: "English Literature", academic_code: "LANG-ENG-303", metadata: ["Poetry", "Common"] },
    { id: 4, subject_name: "Digital Arts & Design", academic_code: "ARTS-DIG-404", metadata: ["Creative", "Lab"] },
    { id: 5, subject_name: "Informatics & AI", academic_code: "TECH-INI-505", metadata: ["Python", "Modern"] },
    { id: 6, subject_name: "Organic Chemistry", academic_code: "CHEM-ORG-606", metadata: ["Science", "Lab"] },
    { id: 7, subject_name: "World History", academic_code: "HIST-WOR-707", metadata: ["Social", "Phase 2"] },
    { id: 8, subject_name: "Molecular Biology", academic_code: "BIOL-MOL-808", metadata: ["Genetics", "Senior"] },
    { id: 9, subject_name: "Classical Music", academic_code: "MUSI-CLA-909", metadata: ["Arts", "Theory"] },
    { id: 10, subject_name: "Global Sociology", academic_code: "SOCI-GLO-010", metadata: ["Social", "Advanced"] },
    { id: 11, subject_name: "Physical Education", academic_code: "PHED-GEN-111", metadata: ["Health", "Sports"] },
    { id: 12, subject_name: "Information Systems", academic_code: "TECH-SYS-222", metadata: ["Database", "IT"] },
    { id: 13, subject_name: "Macro Economics", academic_code: "ECON-MAC-333", metadata: ["Business", "Phase 1"] },
    { id: 14, subject_name: "Modern Geography", academic_code: "GEOG-MOD-444", metadata: ["Science", "Earth"] },
    { id: 15, subject_name: "Philosophy 101", academic_code: "PHIL-GEN-555", metadata: ["Ethics", "Core"] }
  ]);

  const searchSubjects = async (query: string): Promise<string[]> => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 800));
    
    if (!query) return subjects.value.map(s => s.subject_name).slice(0, 10);
    
    return subjects.value
      .filter(s => s.subject_name.toLowerCase().includes(query.toLowerCase()))
      .map(s => s.subject_name);
  };

  const updateSubject = async (id: number, data: any) => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));
    const index = subjects.value.findIndex(t => t.id === id);
    if (index !== -1) {
      subjects.value[index] = { ...subjects.value[index], ...data };
    }
  };

  return { subjects, searchSubjects, updateSubject }
}
