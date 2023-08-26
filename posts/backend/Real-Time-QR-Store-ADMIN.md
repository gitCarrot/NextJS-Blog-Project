---
title: "Project"
subtitle: "infinite subcategory with Tree Arch"
date: "2023-06-25"
category: "spring boot"
---

![](https://lh3.googleusercontent.com/pw/AIL4fc987GA3eoq2_1mgiVzxSzxzvIhaM3QJ9zKdIx48J5rRnYcyZ7wRy5FcQ4Hnl53UaqD3C9uetNttmANCugDR0TUDWECACzPjL5qaSjZMngKOU4GVNly8N2YRr2T6RKNa4C4s9TZlQg-6g-asS5rFRewOIdrPYVGySmE4tfCG9EjXiex1bgrcJb65C11FgTg67gBH6o4uVRRuPmbnuYj3VZpm6kwilWnIZtds75ziIvtR7Sc6g8a4jfSB3HliBer1wtTfiDZuTv5gXMO1enZTz9U_oi8U8_6ty6F33HCepHs6W-DL2ILSRP8FFTfzIS8l5gD5QoI5-b0jGsMGbLaWizUehF39aEKZexcDEZURG2itrX3vnLMDqV2BleoBTY2CxFrVn6zU1QR8fWabDEYoqdHAwWY9v7q-tdz2HO8D8aFrKoBx6GhAzFD08pZEh17a_JzZ9eMFwPQ44NbpH2Y3WUKI1UjgrNv7BhZh-eiWtLvyr00SVp9e9UEU8gj0piXMMx9uDtKJX9rdxBRJVlB8EbMi_vSra6ySUD-zlwZNocOmdFwpuJ1H8Di6gMS4x5ZTxyO5MXme6bpsfRlfRNhT_tGj77aiBG0bBLQrd_vkcViWxVVT05LTB2CPz4CddtCaXUpIbEPoEjfXptMs8aaAXZsEapHkUI0xTcWuFwjH2yXsx5am1FobZuWdnmQd71TUofa8elYbgnJZiT9U-a0A9JaCxlMZdrsD4gtYqJ3Ht6XkeaCiOs-rTPHYyYC95hmKSqHRqzl9rpEMu83jz_e5Zhk8YJ50xmpdsTEo89zGajFmyjL2ORp20opQLOFliPnqDEYQMmj5oTt27Y1pp6xQsFqiYEY1y0KJuTg_TQFGEGVWnxPsmOYe7YFCqIIFi5rsoN23KvD9N7s0E-UeSyEFxoHNNbYR39Y2oehl53HteZ1Et4kNkEn9nC0PNJGyHxk=w1219-h914-s-no?authuser=0)





## Real Time 

![aa](https://lh3.googleusercontent.com/pw/AIL4fc8gpxQvTUgKQ3BcGWZ4BNDI6LfiejvcYFsQhHMbDZKIUfO3q72N21DP9nxP9SwWOtfVbQavYCTDXTzs3nZq1Ggh4kUnyKcpIxvtNWhFJ6dEYPDmGgXzBuHqD02aTB8zW8eFUgyG8IAMg2smHlaxPXZrKzzBdXcdTFFjxd_mXh7SHaqz8lrkzsKV7pa0TepjP1KlvLdXjseLq8IKzWgzIsfXT9Lp2xfgk3raES0tkbrprspTyn5hCH1L2RCb5fgzcEI4dKO8u6zjvjnwlgNOKPBhFo9UCgSz1h88T_6OXpfYByi9NU_tqM7AmaONrNi09bp5mDoX-1SG5Tj6Vcc4n8Niv-mXN5ss19L-FBjstfkszEyFRGvd0oi9aj7xUDjaQYnWSh53jx27-ZfFifj2u6celu0iGtf3XkDFz9wSuiI91thJiW_przApjiOmTDQGiL8F3x2x-MmYIMsm5LTHAEK4G4wRCRk_Cgw6crijRKAoMTnC8sHlUW2I1qKS0r5kbtQe0Ah60Sd6D13lFeLJlwXlWGoeLGG2eoUiASEtPDxhtBy12CQuoqBfJ_M642pwWZ7nlnYotz_4m8lZusGlNn4-0QRAJBXlZSpvC-tmH5J0zOZv3XSQU8ysa_X7QKw31nh6tjqhVZzfGNcnBF6Zue5dTBulZZ6wSgEynv5x5c4e-Zj3NHEOzSX5wj-f-3Xq7wsZJ63SO_8KEZxyk-P0tNLXNhvjJOFzbBqiIXlkuEU6n6L0su7sZ4QwKb4r9DCVqU8vDk0J1C6EiEamFS1YDTEU9DeKv6Zb4rSjQEKpNFmuX70cG8I7m2OApLzqoYWuk2Vjosd5sxDqpH3iAce8M1ZhX8MSEP4UQEKtu-hWH5T_vupX6vEJZ34L3TAKSQTV3AZ9IxbLdwAtf6hlTI0kFwuwVsVXO5VnVjGhFaV3Gn6fonao9fWRjc9gmBlZL78=w1219-h914-s-no?authuser=0)











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

**Relationships:**

- A user can manage multiple stores, but each store is associated with only one user.
- Each store can have multiple tables, categories, products, billboards, and orders.
- A category belongs to one store and can be associated with one billboard.
- A product belongs to one category and one store.
- Each product can have multiple images.
- An order is associated with one store and one table and can have multiple order items.
- An order item is linked to one product and one order.
- Each billboard is associated with one store.

