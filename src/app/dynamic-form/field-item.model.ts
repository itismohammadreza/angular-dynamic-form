type FieldType = 'text' | 'check';

export interface FieldItem {
  field: string;
  label: string;
  type: FieldType;
  hidden: boolean;
  mandatory?: boolean
}
