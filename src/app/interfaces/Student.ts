import { Course } from './Course';

export type Student = {
    id: number
    name: string
    cpf: string,
    email: string,
    email_verified_at: Date
    registration: string
    current_semester: number
    course_id: number
    created_at: Date,
    updated_at: Date,
    course: Course
  }