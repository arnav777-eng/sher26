
import React from 'react';
import { SuccessStory, FAQItem } from './types';

export const SUCCESS_STORIES: SuccessStory[] = [
  { 
    id: '1', 
    name: 'Arjun Mehta', 
    degree: 'MSc Data Science', 
    university: 'University College London', 
    country: 'UK', 
    imageUrl: 'https://images.unsplash.com/photo-1543185377-b75671bc8741?auto=format&fit=crop&q=80&w=800' 
  },
  { id: '2', name: 'Priya Sharma', degree: 'BEng Computer Science', university: 'University of Toronto', country: 'Canada', imageUrl: 'https://picsum.photos/seed/stu2/400/400' },
  { id: '3', name: 'Rohan Gupta', degree: 'MBA', university: 'Technical University of Munich', country: 'Germany', imageUrl: 'https://picsum.photos/seed/stu3/400/400' },
  { id: '4', name: 'Ananya Iyer', degree: 'MA Digital Media', university: 'Monash University', country: 'Australia', imageUrl: 'https://picsum.photos/seed/stu4/400/400' },
  { id: '5', name: 'Vikram Singh', degree: 'MS Cybersecurity', university: 'Arizona State University', country: 'USA', imageUrl: 'https://picsum.photos/seed/stu5/400/400' },
  { id: '6', name: 'Sanya Verma', degree: 'MSc Finance', university: 'Trinity College Dublin', country: 'Ireland', imageUrl: 'https://picsum.photos/seed/stu6/400/400' },
];

export const FAQS: FAQItem[] = [
  {
    question: "What is the typical cost of the consulting process?",
    answer: "Our initial profile evaluation is completely free. We provide a transparent breakdown of any processing or administrative fees during the shortlisting phase based on your chosen universities."
  },
  {
    question: "How long does the entire application process take?",
    answer: "Typically, it takes 4-8 months depending on the intake and country. We recommend starting your evaluation at least 10-12 months before your desired start date."
  },
  {
    question: "What is your success rate for student visas?",
    answer: "We maintain a 98% visa success rate due to our rigorous pre-screening and detailed documentation support."
  },
  {
    question: "Are there scholarship opportunities available?",
    answer: "Yes, we actively guide students on university-specific and external scholarships that can cover 10% to 100% of tuition fees depending on the profile."
  }
];

export const COUNTRIES = ['UK', 'Canada', 'USA', 'Australia', 'Germany', 'Ireland', 'Europe (Other)'];
export const QUALIFICATIONS = ['12th Grade / IB', 'Bachelors Final Year', 'Bachelors Completed', 'Masters Completed'];
export const TEST_STATUS = ['Already Taken', 'Booked', 'Planning to Take', 'Not Required/Waiver'];
export const BUDGET_RANGES = ['< ₹15 Lakhs', '₹15 - ₹30 Lakhs', '₹30 - ₹50 Lakhs', '₹50 Lakhs+'];
export const FUNDING_SOURCES = ['Self/Parents', 'Education Loan', 'Scholarships Needed', 'Combination'];
