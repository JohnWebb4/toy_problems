def increment(digits):
    for i in reversed(range(len(digits))):
        digit = digits[i]

        if digit == '0':
            digits[i] = '9'
            break
        elif digit == '9' and i != 0:
            digits[i] = '0'
            continue
        elif digit == '9' and i == 0:
            # Add another digit and reset
            digits.append('0')

            digits[0] = '9'

            for j in range(len(digits) - 1):
                digits[j + 1] = '0'

            break

    return digits


def special_multiple(x):
    if x == 0:
        return 0

    digits = ['9']
    value = 9

    while value % x != 0:
        value = int(''.join(digits))
        digits = increment(digits)

    return str(value)
