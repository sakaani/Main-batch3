# User Story 1
puts "Enter the number to be tested: "
number = gets.chomp

if number.to_i < 0
    puts 'false'
elsif
    float_number = (number.to_i)**0.5
    integer_number = float_number.to_i
    if float_number === integer_number
        puts 'true'
    else puts 'false'
    end
end


