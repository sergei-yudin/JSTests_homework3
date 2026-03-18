import fetchData from '../src/http';

test('должен выбрасывать ошибку, так как это заглушка', () => {
    expect(() => fetchData('https://server/user/1')).toThrow('Эту функцию нужно замокать в тестах');
});