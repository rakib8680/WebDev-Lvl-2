import { z } from 'zod';
import { semesterCode, semesterName } from './academicSem.constant';

export const createAcademicSemValidationSchema = z.object({
  body: z.object({
    name: z.enum([...semesterName] as [string, ...string[]]),
    year: z.date(),
    code: z.enum([...semesterCode] as [string, ...string[]]),
    startMonth: z.enum([...semesterName] as [string, ...string[]]),
    endMonth: z.enum([...semesterName] as [string, ...string[]]),
  }),
});
