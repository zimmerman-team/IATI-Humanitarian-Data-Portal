// util function to check if data exists
// and can be processed/formatted
export function checkIfValid(item, publisherData, rangeKey): boolean {
  return (
    item.specPub &&
    item.specPub[rangeKey] &&
    publisherData[rangeKey] &&
    item.specPub[rangeKey].org_count &&
    publisherData[rangeKey].org_count
  );
}
