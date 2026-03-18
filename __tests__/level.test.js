import fetchData from '../src/http';
import { getLevel } from '../src/level';

jest.mock('../src/http');

test('должен возвращать уровень пользователя при успешном ответе сервера', () => {
    fetchData.mockReturnValue({
        status: 'ok',
        level: 5,
    });

    const result = getLevel(1);

    expect(fetchData).toHaveBeenCalledWith('https://server/user/1');
    expect(result).toBe('Ваш текущий уровень: 5');
});

test('должен возвращать сообщение об ошибке, если сервер вернул неуспешный статус', () => {
    fetchData.mockReturnValue({
        status: 'error',
    });

    const result = getLevel(2);

    expect(fetchData).toHaveBeenCalledWith('https://server/user/2');
    expect(result).toBe('Информация об уровне временно недоступна');
});