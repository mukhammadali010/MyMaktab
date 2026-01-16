export interface Application {
  id: number;
  status: 'created' | 'accepted' | 'rejected';
  statusLabel: string;
  year: string;
  student: string;
  number: string;
  category: string;
  created: string;
}
