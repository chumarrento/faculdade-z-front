export type Discipline = {
    discipline_name: string
    discipline_difficulty?: string
    discipline_teacher: string
    discipline_schedule?: DisciplineSchedule
    semester?: number
    status: string
    final_grade: number
}

type DisciplineSchedule = {
    weekday: string
    start_time: string
    end_time: string
}