# VIKALI

## Idea

* eCommerce platform where products can be reviewed and summary of the same generated on the side.

## CRUD Operations

* Load product data from (Read)
* Delete review
* Update product review
* Create new product review

## Association and Table relations

product => review => user
has_many :users through: :reviews
has_many :products through: :reviews

Review => belongs_to :user, :product

## MVP

* A user can search for a product
* A user should be able to leave a review / comment on product
* A user can append star_rating for the particular reviewed product
