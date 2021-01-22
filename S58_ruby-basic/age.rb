# User Story 1
[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].each do |num|
    puts num
end


# User Story 2
h = {'a' => 1, 'b' => 2, 'c' => 3, 'd' => 4}
extra = {'e' => 5}
# puts h['b']
i = extra.merge(h)
# puts i


# User Story 3: Kulang pa po at may error, couldn't figure it out ma'am
symbol_array = [:email, :address, :phone]
contact_data = [ ['ana@email.com', '123 Main St.', '555-123-4567'], ['avion@email.com', '404 Not Found Dr.', '123-234-3454'] ]

precontact1 = contact_data[0]
contact1 = symbol_array.zip(precontact1).flatten.compact

precontact2 = contact_data[1]
contact2 = symbol_array.zip(precontact2).flatten.compact

contact3 = []
contact3.push(contact1)
contact3.push(contact2)

contacts = { 'Analyn Cajocson' => {}, 'Avion School' => {} }
contacts.each {
    |k, v| contacts[k] = contact3
}
# puts contacts


# User Story 4
# puts "Enter your age bro: "
# age = gets.chomp
# age_integer = age.to_i + 10
# age1 = age_integer.to_s
# puts "In 10 years, you will be #{age1}!"

# age_integer = age.to_i + 20
# age2 = age_integer.to_s
# puts "In 20 years, you will be #{age2}!"

# age_integer = age.to_i + 30
# age3 = age_integer.to_s
# puts "In 30 years, you will be #{age3}!"

# age_integer = age.to_i + 40
# age4 = age_integer.to_s
# puts "In 40 years, you will be #{age4}!"


