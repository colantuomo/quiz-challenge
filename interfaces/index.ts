export interface Answer {
  question: number;
  answer: string;
  isCorrect: boolean;
}

export interface Quiz {
  id: string;
  startDate: Date;
  endDate: Date;
  answers: Answer[];
}
