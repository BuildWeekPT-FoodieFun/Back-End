# Back-End

# Routes
# Main URL
https://foodiefunbackend.herokuapp.com/

Register
POST /api/auth/register
201: returns ID of user

{
	"username": "username",
	"password": "password"
}


Login 
POST /api/auth/login
200: returns username

{
	"username": "username",
	"password": "password"
}


Get list of all food reveiws
GET /api/app/


Add a food review
POST /api/app

{
    "item_name": "text", *required
    "restaurant_name": "text", *required
    "restaurant_type": "string", *required
    "rating": 5, [number] 1-5 *required
    "photo": "blob type", 
    "price": 12.99, [number 6 digits before decimal, 2 after] 
    "comments": "text",
    "wait_time": "00:38",
    "date" : August 12, 2021 
}


Change a food review
PUT /api/app

Any field can be updated none are required

{
    "item_name": "text", 
    "restaurant_name": "text", 
    "restaurant_type": "string", 
    "rating": 5, [number] 1-5 
    "photo": "blob type", 
    "price": 12.99, [number 6 digits before decimal, 2 after] 
    "comments": "text",
    "wait_time": "00:38",
    "date" : August 12, 2021 
}


Delete a food review
DELETE /api/app/:id
Returns 1 when successful

Get single review by ID
GET /api/app/:id
Returns review

# Stretch *not created

Get food reviews by restaurant
GET /api/app/:restid

Get food reviews by price
GET /api/app/:price

Get food reviews by type
GET /api/app/:typeid

Get food reviews by date
GET /api/app/:date

Get food reviews by rating
GET /api/app/:rating


# Schema
# Users table
Column name	 Type	  Length	Required?	
username	 string	  64	    Yes	
password	 string	  64	    No	
id	         integer		    Yes	*Created when a user is created

# Food Review table
Column name	      Type	    Length	Required?
item_name	      text		        Yes
restaurant_type	  text		        Yes
restaurant_name	  string	64	    Yes
rating	          integer   1	    Yes
photo	          blob		        No
price	          decimal	6.2	    No
comments	      text		        No
wait_time	      time		        No
date	          date		        No