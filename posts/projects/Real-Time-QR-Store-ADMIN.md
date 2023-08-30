---
title: "QR based Real time Point Of Sale System"
subtitle: "Revolutionizing the Dining Experience for customer"
date: "2023-07-10"
---

<p>
# Introducing a Seamless Point Of Sale System: Revolutionizing the Dining Experience

In an age where convenience is paramount, diners are no longer content with traditional ordering processes. With the rise of digital technology, the way we experience dining needs an upgrade. Enter our new Point Of Sale System, designed to blend convenience with efficiency.

***You can see the websiteS below***

> ### QR ORDER WEBSITE ->  [Visit Website](https://qr-order-admin.vercel.app/)
>
> ### Store For Order (QR)
> ![](https://lh3.googleusercontent.com/pw/AIL4fc8pVNN4Rsla8lxG6rf99rklXD71erIFmFpj4i2swAZ0xH3Af02sc8o5oWDiKo3RyN0pdMbFzCLFcEfHaRVFa0HsunrDzJ3wOYo1H1EzZk4RDtT71aE=w2400)

> ### Admin DashBoard for Store (Example)
> [Admin DashBoard for the store above](https://qr-order-admin.vercel.app/92f73a72-e921-474e-b0e2-d38c3bced91d/data-setting)



> ## Stacks
>
> - Next.js
> - Node.js
> - Typescript
> - MySQL
> - Prismadb
> - Framer Motion 
> - GSAP
> - Zustand

# How does it work?

![](https://lh3.googleusercontent.com/pw/AIL4fc_6QnmW8xOepnYy-EByzndylkjZPMG8-OmcFx7vTGvucGwkRm9i2w3GwUZxRqcOPfi93RHuWWi-pvmmYKNK2dUU0WJcNV-31C81UBQU_NtJf1J5eEE=w2400)

### Smart QR Ordering 
Each table is equipped with its unique QR code. Customers can simply scan the code to view the menu and place orders instantly. No waiting, no fuss.

![](https://lh3.googleusercontent.com/pw/AIL4fc8dk9x6xRqOXuu27yU-96uYJpcGwouPgbFTsQHkcZtnYr9XTsNEZ-WK-UXXv6sHNYeib83QALIk5iI9AQKjFJaf8HjNnz4N1X3UiPzvY6x25OIWtNQ=w2400)

### Real-time Order Management (Socket.io)
On the backend, administrators and staff have immediate visibility of incoming orders. Whether it's a single café or a chain of restaurants, all orders funnel into a real-time system. This ensures timely preparation and delivery of meals, enhancing customer satisfaction.

## [Socket.io is on process]!

#### ***You can check the full orders that came from multiple tables***

![](https://lh3.googleusercontent.com/pw/AIL4fc-ogtFpIMji2S3Z_63BU3IuS1KKEd6Ay4NiqxVmKz2A_MopngL7Zmfw4LEheqQcIl3lucMy_HOLwll6DobCvsdqHTSMCLwC1IWlz8Jio36dIvzKl8E=w2400)

#### ***You can see the orders by each Tables that you made***

![](https://lh3.googleusercontent.com/pw/AIL4fc_vxksEywPJiu0c0io5klCoKrAVB7lzmxhMOsFyQglUjNgl_40D_HI2xeLHX8h-01laKUwqf8sX1llA0I3WTJ1J0vYm25C9Esko0nq-ZanBDyzMRik=w2400)


#### ***You can see the detail of the each order***

![](https://lh3.googleusercontent.com/pw/AIL4fc97XP-awvK82uUspf1VqvSAeEpS2lKO_qRoc2fRUU3aY9ozvaJAyAGSx_xxUCmsAcSUuqfD7ebESTEgimc6v2raCo9h1BEdYW1Cl5n1FlEMNO6L-YI=w2400)



### Multi-Store Operation

![](https://lh3.googleusercontent.com/pw/AIL4fc_v4Ra3PdhCqlgnz9-MHdrx0lpsMkrsHu3_dnWfMZq-eM4EkwIPLf_NMxtUwBM5PgnTlyGbnaBx4xqYgXyhX8OE2nnZZ0D_mGj6W38do1y5KfsTKjA=w2400)

Have multiple outlets? No problem! With our system, you can manage orders, menus, and operations across multiple stores from a single account.

### Instantaneous Statistics
With an intuitive dashboard, gain insights into your sales and order statistics. This provides a pivotal advantage in understanding customer preferences and optimizing the menu accordingly.

*Will add more statistic about stocks*

![](https://lh3.googleusercontent.com/pw/AIL4fc_UDlUlPoo3oDG49v0qa11xSgOhoK2udVtW9Dducb-ryd8r0VsYXxGTjHzfRfRhRO2YQ_jCgIYwwPreKFeeTs3U_ajNSylnMaTdYSFfUyD_PbIc0j8=w2400)

### Easy Setup and Management
Setting up an online storefront has never been this easy. Within 10 minutes, one can establish a sleek and user-friendly store interface. The system also permits hassle-free product updates. Adding new tables? Our automatic QR code generator will handle that for you.

![](https://lh3.googleusercontent.com/pw/AIL4fc_4z95jezkbdq071vHp6cTAzv_zgYfEfXKQHSoX9P5q8Ke9COskgxOA_UJ7kKx1giHQbWvcqqlloX1bU6X87qqSTSJu9lb_jRAI_6Z50pjZyy50ZbY=w2400)


*** And you can add, edit, delete any properties Easily ***

![](https://lh3.googleusercontent.com/pw/AIL4fc8al7oQ1u-6JECWga4r4FA0ObfnK9I9OxN34Htb_bVWbstBQE2nwybK3WBo19j3SEdfLZ4SKiTHQwz1Ngaktm55KOxwqh4rONhXVVP77JnkjDMOuA4=w2400)



### Connectivity with Minimal Internet
Recognizing the challenges posed by weak internet connectivity in certain regions, we've optimized our system to function smoothly with minimal internet access.

### How I optimized the store that users see

> `Advanced Cart State Management in the Project`

- The backend and frontend are hosted on separate servers.
>- The frontend manages the cart, item quantity, and emptying the cart.
>- The global state is managed using a map that takes dynamic queries of storeId and tableId as keys. These are then linked to PersistStorage, thereby minimizing internet usage.
>- The only query executed when customers scan a QR code and choose a menu is one that fetches products for each category.
Code Overview:

> `Interfaces`

>- CartItem: Represents an item in the cart with its product details and quantity.
>- CartStore: Represents the entire cart, and has functions to add, remove, change item quantity, and clear the cart.
>- Caching Mechanism:
A map named storeCache is utilized to cache the cart states, making retrieval faster.

> `useCart Function`
>- This is a zustand-based hook to manage the cart state.
>
>- It takes storeId and tableId as parameters to create a unique storeKey.
>- If the cart state for a particular storeKey exists in the cache, it returns it >directly.
>- If not, it creates a new state with create and persist, allowing the cart items to >be added, removed, and modified.
>- The cart state is stored in the browser's local storage with a unique name, cart-storage-${storeId}-${tableId}, ensuring each table at a store has its own cart state.
>- Notifications are sent using toast.success whenever items are added or removed.
This zustand code effectively manages the cart's state, leveraging caching and persistent storage to enhance user experience.

### Database Architecture Highlights

The database's heart is the Store table, around which all other entities revolve. Each store can have multiple Billboards, Categories, and Tables, representing various promotional displays, menu categories, and seating arrangements, respectively.

Products, the essence of any store, reside within the Product table and are associated with specific categories. Each product can have multiple images, allowing for a visually rich menu. As orders pour in, they're tracked in the Order and OrderItem tables, facilitating real-time updates for the kitchen and administrative staff.

In conclusion, this Point Of Sale System isn't just a digital tool—it's a transformative experience for both diners and restaurateurs. In the digital age, it bridges the gap between traditional dining and modern-day convenience, ensuring a seamless dining journey for all.






## The flow of the admin and store

![aa](https://lh3.googleusercontent.com/pw/AIL4fc8NpUOADnip5D2sOT_OZDkfk7SnrSdkgLBOHccQOit-bitZ52YUOt_4G9D2c0bE0aHMx218s9_dqUDFlR2kuuedvqOOk6bZmz1JmGEDJMAweLEJW4A=w2400)


**1. Store Management:**

`Store` Table:

- Represents individual stores or restaurants.
- Each `Store` is uniquely identified by an `id`.
- Has a `name` to represent the name of the store.
- Each store is associated with a `userId`, indicating which user manages or owns that store.

**2. Product and Category Management:**

`Category` Table:

- Represents the various categories of products (like "Appetizers", "Main Course", etc.).
- Each `Category` is associated with a particular `Store` through `storeId`.
- Each category can also be associated with a `Billboard` (which seems to be an advertisement or featured display for that category) using `billboardId`.

`Product` Table:

- Represents the individual items or dishes available for order in a store.
- Each `Product` is associated with a particular `Category` through `categoryId`.
- Products have various attributes like `name`, `price`, `description`, and flags to indicate if they are `isFeatured` or `isArchived`.

`Image` Table:

- Represents images of individual products.
- Each image is linked to a `Product` via the `productId`.
- Contains a URL (`url`) pointing to the actual image file.

**3. Table Management and Ordering:**

`Table` Table (a bit of a tongue-twister):

- Represents the physical tables inside a store.
- Each table is associated with a particular `Store` through `storeId`.
- Tables have an `isPaid` flag to indicate if the current orders on that table have been paid or not.

`Order` Table:

- Represents orders placed by customers.
- Each order is linked to a `Store` via the `storeId`.
- Orders have different states, represented by the `orderState` enum. It can be "NOTREADY", "IN_PROGRESS", "READY", or "PAID".
- The `isPaid` flag indicates if the order has been paid for or not.
- Each order is associated with a table through `tableId`, indicating where the order is placed.

`OrderItem` Table:

- Represents individual items within an order.
- Each `OrderItem` is linked to a specific order using `orderId` and to a specific product using `productId`.
- The `count` represents the quantity of that product in the order.

**4. Billboard Management:**

`Billboard` Table:

- Represents billboards or advertisements for specific categories or promotional events.
- Each billboard is associated with a specific `Store` through `storeId`.
- Has attributes like `label` and `imageUrl` to display the content of the billboard.


## [TOTAL ORDER TABLE WILL BE ADDED!]

**Relationships:**

- A user can manage multiple stores, but each store is associated with only one user.
- Each store can have multiple tables, categories, products, billboards, and orders.
- A category belongs to one store and can be associated with one billboard.
- A product belongs to one category and one store.
- Each product can have multiple images.
- An order is associated with one store and one table and can have multiple order items.
- An order item is linked to one product and one order.
- Each billboard is associated with one store.
