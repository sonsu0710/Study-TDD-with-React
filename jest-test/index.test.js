const {sum, person, toggle} = require('./index');

describe('test index.js file', () => {

    // Matcher 사용
    // Matcher 는 결과값을 비교하여 테스트의 성공 여부를 파악.

    // toBe 메서드 사용
    it('sums 1 + 2 to equal 3', () => {
        expect(sum(1, 2)).toBe(3);
    });

    // toEqual 메서드 사용
    it('make a person', () => {
        expect(person('Kim', 20)).toEqual({
            name: 'Kim',
            age: 20,
        });
    });

    // toBeFalsy, toBeTruthy 사용
    it('returns false', function () {
        expect(toggle(true)).toBeFalsy();
        expect(toggle(true)).not.toBeTruthy();
    });
});