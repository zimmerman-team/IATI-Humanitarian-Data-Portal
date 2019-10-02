export interface BaseRespModel<QueryModel, DocModel> {
  responseHeader: {
    status: number;
    QTime: number;
    params: QueryModel;
  };
  response: {
    numFound: number;
    start: number;
    docs: DocModel[];
  };
}
