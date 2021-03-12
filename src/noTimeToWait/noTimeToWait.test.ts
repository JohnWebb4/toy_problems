import { canSolveInTime } from './noTimeToWait';

describe('noTimeToWait', () => {
    it('should return YES for 2 5 3', () => {
        expect(canSolveInTime(2, 5, 3, [1, 2])).toEqual("YES");
    });

    it('should return NO for 2 6 3', () => {
        expect(canSolveInTime(2, 6, 3, [1, 2])).toEqual("NO");
    });
});