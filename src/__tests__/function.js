import getFeatures from '../function';

test('testing getFeatures()', () => {
  const testData = {
    name: 'Лучник',
    type: 'Bowman',
    health: 50,
    level: 3,
    attack: 40,
    defence: 10,
    special: [
      {
        id: 8,
        name: 'Двойной выстрел',
        icon: 'http://...',
        description: 'Двойной выстрел наносит двойной урон',
      },
      {
        id: 9,
        name: 'Нокаутирующий удар',
        icon: 'http://...',
      },
      {
        id: 10,
        name: 'Тестовый удар',
        icon: 'http://...',
      },
    ],
  };

  const expected = [
    {
      id: 8,
      name: 'Двойной выстрел',
      icon: 'http://...',
      description: 'Двойной выстрел наносит двойной урон',
    },
    {
      id: 9,
      name: 'Нокаутирующий удар',
      icon: 'http://...',
      description: 'Описание недоступно',
    },
    {
      id: 10,
      name: 'Тестовый удар',
      icon: 'http://...',
      description: 'Описание недоступно',
    }];

  const call = getFeatures(testData);
  expect(call).toEqual(expected);
});
