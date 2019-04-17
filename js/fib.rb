require 'byebug'

def fib(num, memo = {})
    if num == 1
        return [1]
    elsif num == 2
        return [1,2]
    end    

    memo[num-1] = fib(num-1, memo)
    debugger
    arr2 = memo[num-1].concat[(memo[num-1])[-1] + (memo[num-1])[-2]]
    return arr2;
end

print(fib(5))