# ASSESSMENT 4: Ruby Coding Practical Questions
# MINASWAN ✌️

# --------------------1) Create a method that takes in a number and determines if the number is even or odd. Use the test variables provided.

num1 = 7
# Expected output: '7 is odd'
num2 = 42
# Expected output: '42 is even'
num3 = 221
# Expected output: '221 is odd'

def even_odd num1
if num1 % 2 == 0
    "#{num1} is even"
else
    "#{num1} is odd"
    end
    end
p even_odd(7)

def even_odd num2
    if num2 % 2 == 0
        "#{num2} is even"
    else
        "#{num2} is odd"
    end
    end
p even_odd(42)


def even_odd num3
    if num3 % 2 == 0
        "#{num3} is even"
    else
        "#{num3} is odd"
    end
    end
p even_odd(221)


# -------------------2) Create a method that takes in a string and removes all the vowels from the string. Use the test variables provided. 
# HINT: Check out this resource: https://ruby-doc.org/core-2.6/String.html#method-i-delete

beatles_album1 = 'Rubber Soul'
# Expected output: 'Rbbr Sl'
beatles_album2 = 'Sgt Pepper'
# Expected output: 'Sgt Pppr'
beatles_album3 = 'Abbey Road'
# Expected output: 'bby Rd'

puts beatles_album1.delete 'aeiou'
puts beatles_album2.delete 'aeiou'
puts beatles_album3.downcase.delete 'aeiou'


# -------------------3) Create a method that takes in a string and checks if the string is a palindrome. A palindrome is the same word spelled forward or backward. Use the test variables provided.

palindrome_tester1 = 'Racecar'
# Expected output: 'Racecar is a palindrome'
palindrome_tester2 = 'LEARN'
# Expected output: 'LEARN is not a palindrome'
palindrome_tester3 = 'Rotator'
# Expected output: 'Rotator is a palindrome'

def palindrome?(string)
    if string == string.reverse
       return 'Racecar is a palindrome'
    else
     'Racecar is not a palindrome'
        
    end
end
p palindrome? "Racecar".downcase.reverse

def palindrome?(string)
    if string == string.reverse
       return 'LEARN is a palindrome'
    else
     'LEARN is not a palindrome'
        
    end
end
p palindrome? "LEARN".reverse

def palindrome?(string)
    if string == string.reverse
       return 'Rotator is a palindrome'
    else
     'Rotator is not a palindrome'
        
    end
end
p palindrome? "Rotator".downcase.reverse

