export type ExpansionPanelDetailModel = {
  question: string;
  answer: string;
}

export type ExpansionPanelModel = {
  questions: ExpansionPanelDetailModel[];
};
