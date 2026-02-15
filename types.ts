
export interface SuccessStory {
  id: string;
  name: string;
  degree: string;
  university: string;
  country: string;
  imageUrl: string;
}

export interface FormData {
  preferredCountry: string;
  intake: string;
  currentQualification: string;
  gpa: string;
  testStatus: string;
  budget: string;
  funding: string;
  name: string;
  phone: string;
  email: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}
