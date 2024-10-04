'use server'
 
import { redirect } from 'next/navigation'
 
export async function navigateStudy() {
  redirect('/study');
}