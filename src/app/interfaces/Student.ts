import { Course } from './Course';

export type User = {
    id: number
    name: string
    cpf: string,
    email: string
    registration: string
    current_semester: number
    course_id: number
    created_at: Date,
    updated_at: Date,
    course: Course
  }