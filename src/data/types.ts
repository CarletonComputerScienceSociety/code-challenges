export interface Question {
  id: string;
  title: string;
  difficulty?: "Easy" | "Medium" | "Hard";
  style?: string;
  password?: string;
  videoLink?: string;
  pdfPath?: string;
  options?: {
    id: string;
    content: string;
    evaluate: (input: string) => boolean;
  }[];
  content?: string;
  evaluate?: (input: string) => boolean;
  startDate: Date;
  endDate: Date;
}

// export interface QuestionV2 {
//   id: string;
//   title: string;
//   style?: string;
//   password?: string;
//   options: QuestionV2Option[];
//   startDate: Date;
//   endDate: Date;
// }

// interface QuestionV2Option {
//   id: string;
//   content: string;
//   evaluate: (input: string) => boolean;
// }
