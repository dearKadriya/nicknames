import Validator from './Validator';

test('Проверка допустимости латинских букв', () => {
  const test = new Validator();
  const result = test.validateUsername('бвы');
  expect(result).toBe(false);
});

test('Проверка на содержание более трех цифр подряд', () => {
  const test = new Validator();
  const result = test.validateUsername('1111');
  expect(result).toBe(false);
});

test('Проверка на содержание в начале цифр', () => {
  const test = new Validator();
  const result = test.validateUsername('1ee');
  expect(result).toBe(false);
});

test('Проверка на содержание в начале символов подчеркивания', () => {
  const test = new Validator();
  const result = test.validateUsername('_1ee');
  expect(result).toBe(false);
});

test('Проверка на содержание в начале символов тире', () => {
  const test = new Validator();
  const result = test.validateUsername('-1ee');
  expect(result).toBe(false);
});

test('Проверка на содержание в конце цифр', () => {
  const test = new Validator();
  const result = test.validateUsername('ee1');
  expect(result).toBe(false);
});

test('Проверка на содержание в конце символов подчеркивания', () => {
  const test = new Validator();
  const result = test.validateUsername('1ee_');
  expect(result).toBe(false);
});

test('Проверка на содержание в конце символов тире', () => {
  const test = new Validator();
  const result = test.validateUsername('1ee-');
  expect(result).toBe(false);
});

test('Проверка на содержание букв чередующихся тире', () => {
  const test = new Validator();
  const result = test.validateUsername('w-w-w');
  expect(result).toBe(true);
});
