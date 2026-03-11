import { ref, computed } from 'vue'
import { useTeachers } from './useTeachers'
import { useStudents } from './useStudents'
import { useClasses } from './useClasses'
import { useSubjects } from './useSubjects'

export function useDashboard() {
  const { teachers } = useTeachers()
  const { students } = useStudents()
  const { classes } = useClasses()
  const { subjects } = useSubjects()

  const stats = computed(() => [
    { 
      label: 'Total Guru', 
      value: teachers.value.length.toString(), 
      icon: 'fas fa-user-tie', 
      color: 'text-primary',
      bg: 'bg-primary/10'
    },
    { 
      label: 'Total Siswa', 
      value: students.value.length.toString(), 
      icon: 'fas fa-user-graduate', 
      color: 'text-secondary',
      bg: 'bg-secondary/10'
    },
    { 
      label: 'Kelas Aktif', 
      value: classes.value.length.toString(), 
      icon: 'fas fa-door-open', 
      color: 'text-accent',
      bg: 'bg-accent/10'
    },
    { 
      label: 'Total Subjects', 
      value: subjects.value.length.toString(), 
      icon: 'fas fa-book', 
      color: 'text-info',
      bg: 'bg-info/10'
    }
  ])

  const academicEvents = ref([
    { id: 1, title: 'Mid-term Exams', date: 'Oct 15 - Oct 22', type: 'Exam', color: 'primary' },
    { id: 2, title: 'Parent-Teacher Meeting', date: 'Oct 25, 09:00 AM', type: 'Meeting', color: 'secondary' },
    { id: 3, title: 'Inter-school Sport Day', date: 'Nov 02', type: 'Event', color: 'accent' },
    { id: 4, title: 'Science Fair Submission', date: 'Nov 05', type: 'Deadline', color: 'error' }
  ])

  const performanceProgress = ref([
    { label: 'IPA (Science)', value: 88, color: 'primary' },
    { label: 'Matematika', value: 76, color: 'secondary' },
    { label: 'Bahasa Indonesia', value: 92, color: 'accent' },
    { label: 'English', value: 84, color: 'warning' }
  ])

  return {
    stats,
    academicEvents,
    performanceProgress
  }
}
