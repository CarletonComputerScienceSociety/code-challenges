export interface Question {
  id: string;
  title: string;
  content: string;
  evaluate: (input: string) => boolean;
  startDate: Date;
  endDate: Date;
}
