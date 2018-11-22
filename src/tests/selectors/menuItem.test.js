import selectMenuItems from '../../selectors/menuItems';
import menuItems from '../fixtures/menuItems';

test('should filter by text value', () => {
  const filters = {
    text: 'u'
  };
  const result = selectMenuItems(menuItems, filters);
  expect(result).toEqual([menuItems[2]]);
});
