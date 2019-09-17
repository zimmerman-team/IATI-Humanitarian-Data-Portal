export type PrivacyModel = {
  title: string;
  sections: SectionModel[];
};

interface SectionModel {
  title: string;
  content: string | string[];
}
