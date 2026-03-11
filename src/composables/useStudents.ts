import { ref } from 'vue'

export function useStudents() {
  const students = ref([
    { id: 1, name: "Alice Thompson", nis: "20231001", gender: "Female", class_name: "X - Science A", enrollment_status: "Active" },
    { id: 2, name: "Benjamin Wright", nis: "20231002", gender: "Male", class_name: "X - Science A", enrollment_status: "Active" },
    { id: 3, name: "Catherine Hall", nis: "20231003", gender: "Female", class_name: "X - Science B", enrollment_status: "Active" },
    { id: 4, name: "Daniel King", nis: "20231004", gender: "Male", class_name: "XI - IT 1", enrollment_status: "Graduated" },
    { id: 5, name: "Elena Scott", nis: "20231005", gender: "Female", class_name: "XII - Arts", enrollment_status: "Active" },
    { id: 6, name: "Franklin Young", nis: "20231006", gender: "Male", class_name: "X - Science A", enrollment_status: "Active" },
    { id: 7, name: "Grace Adams", nis: "20231007", gender: "Female", class_name: "X - Science B", enrollment_status: "Active" },
    { id: 8, name: "Henry Baker", nis: "20231008", gender: "Male", class_name: "XI - IT 2", enrollment_status: "Active" },
    { id: 9, name: "Isabella Green", nis: "20231009", gender: "Female", class_name: "XII - Arts", enrollment_status: "Active" },
    { id: 10, name: "Jack Taylor", nis: "20231010", gender: "Male", class_name: "X - Science A", enrollment_status: "Active" },
    { id: 11, name: "Katherine Reed", nis: "20231011", gender: "Female", class_name: "XI - IT 1", enrollment_status: "Active" },
    { id: 12, name: "Liam Hill", nis: "20231012", gender: "Male", class_name: "XII - Science", enrollment_status: "Active" },
    { id: 13, name: "Mia Nelson", nis: "20231013", gender: "Female", class_name: "X - Science B", enrollment_status: "Active" },
    { id: 14, name: "Noah Carter", nis: "20231014", gender: "Male", class_name: "XI - IT 2", enrollment_status: "Active" },
    { id: 15, name: "Olivia Mitchell", nis: "20231015", gender: "Female", class_name: "XII - Arts", enrollment_status: "Active" }
  ]);

  const updateStudent = async (id: number, data: any) => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));
    const index = students.value.findIndex(t => t.id === id);
    if (index !== -1) {
      students.value[index] = { ...students.value[index], ...data };
    }
  };

  return { students, updateStudent }
}
