

(1..100).each do |n|
	fizz = n%3 == 0
	buzz = n%5 == 0
	puts "FizzBuzz" if fizz && buzz
	puts "Fizz" if fizz
	puts "Buzz" if buzz
	puts n if !fizz && !buzz
end
