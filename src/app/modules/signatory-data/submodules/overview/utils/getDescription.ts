export const getDescription = suppLink => {
  const desc =
    '<p><b>PLEASE READ:</b> Users of the information provided here are reminded that context must be considered in relation to the data that each organisation currently publishes to IATI. Publishers are generally NOT expected to attain 100% for the majority of the featured data measures but they are encouraged to use all of the data elements if appropriate? As a result, the measures provided are ultimately to enable the Portal data user to decide for themselves on the comprehensiveness and usefulness of the information currently provided by this publisher. </p>';

  const text = `<p><br>In order to assist, the publisher has provided additional information about the humanitarian data they publish <a href=${suppLink} target='_blank'>here</a></p>`;
  return desc + (suppLink ? text : '');
};
