# User Story 1
array1 = [1, 3, 5, 7, 9, 11]
number_int1 = 3

if array1.index(number_int1)
    puts 'Number exists in the array.'
else puts 'Not in array.'
end


# User Story 2
puts "Provide a number between 0 to 100."
number_int2 = gets.chomp.to_i

case number_int2

    when -1000...0
        puts "Do not provide a negative number."
    when 0..50
        puts "Number is from 0 to 50."
    when 51..100
        puts "Number is from 51 to 100."
    when 101..1000
        puts "Number is above 100."
    else puts "Error: do not provide number out of range."
end


# User Story 3
puts "Provide a number: "

input_string = nil
until (input_string === "STOP")
    input_string = gets.chomp
    puts input_string + " black sheep."
end

if input_string === "STOP"
   puts "Loop has ended."

elsif input_string.to_i < 0
   puts "Don't input negative numbers."

end


# # User Story 4
array2 = [6, 3, 1, 8, 4, 2, 10, 65, 102]
array3 = array2.select { |n| n.even? }

puts array2.inspect
puts array3.inspect