---
title: "OCarrot"
subtitle: "Hub for competitive programming and collaborative online wrong-answer notebooks"
date: "2023-06-10"
---


# OCARROT: Revolutionizing Competitive Programming with a Comprehensive Problem Archive
> #### Official website Url->  [Visit Ocarrot](https://o-carrot.vercel.app/)


> ## Stacks
>
> - Next.js
> - Node.js
> - Typescript
> - MySQL
> - Prismadb

Competitive programming has always been a vibrant arena for budding programmers and seasoned developers alike. With thousands of problems scattered across multiple websites, it's often a challenge to keep track of those intriguing challenges that leave a lasting impression. Enter OCARROT, a platform designed to address this very issue.

## What is OCARROT?

OCARROT stands as a beacon for competitive programmers, offering a meticulously organized archive of programming problems. Not just any problems, but those that users find particularly compelling or challenging. It's a platform where users can record, share, and filter only the best problems, ensuring that no intriguing challenge ever goes forgotten.

![](https://lh3.googleusercontent.com/pw/AIL4fc8Ki8bIT2pj8g2d5BUJ330Fq-MjYr7nLSoXvrNt28ti1ODa0xQ647-E1aRZl3F6WcTYB5dVI5sThs6D_36K5IkusFGBBXKAm-S1esv9cX1QYfXzFak=w2400)

## Why OCARROT?

Every programmer has faced that moment when they recall a particularly challenging problem but can't remember where they encountered it. OCARROT's raison d'être is to eliminate this struggle. By allowing users to log and categorize problems, the platform ensures that no problem ever goes missing in the vast ocean of algorithms.


### 1. **Tailored Filtering**

No longer do users need to rely on vague memory or cumbersome bookmarks. OCARROT offers robust filtering options:

![](https://lh3.googleusercontent.com/pw/AIL4fc_JKFfgu41s_goKeCi2S6BLKl2UzToOU5XQSY4F8mJadOXpYv2xiql52tq8VyFsmOsXoEOEJ9rWsxxvY-7s6fS2yf6ePNoZapetcP_83voHEdJgF0w=w2400)

- **By Website**: Whether it's LeetCode, Codeforces, or any other platform, users can filter problems based on their source.
- **By Algorithm Tag**: Perfect for those wanting to practice specific algorithms or data structures. From Graph Theory to Dynamic Programming, users can hone in on topics of interest.
- **By Difficulty**: Whether you're a newbie or a seasoned coder, find problems that match your skill level.
- **By Comprehensive Level**: Some problems are straightforward, while others require intricate understanding. Filter problems based on how in-depth they are.



### 2. **Favorites at Your Fingertips**

![](https://lh3.googleusercontent.com/pw/AIL4fc-UmKRHAUuE52u_HP9Pfg9KejxvhThTBLoAf362HZzSvRfa0GXcv4c59qGiR70rZVFs0sjrkUkqlZbFsOl79otA2KocEn_9D-uU5k8f7Z32-8MxSvM=w2400)

Found a problem that truly challenges you? Or perhaps one that offers a unique perspective? With a single click, users can add problems to their favorites, ensuring they're always just a click away.

### 3. **Powerful Search**

![](https://lh3.googleusercontent.com/pw/AIL4fc9KWInj-DYVxzdwV9q_It77MqUK0x8xiW8lRb1Sr1-XpKCBsrmWazPy1Xat2a4zOJtNbrPoTZSQ4FAYKIxeJNIW7k179YYxARU-puNxs4_6nDJ3IOI=w2400)

Sometimes, filtering isn't enough. Maybe you remember a specific term or a unique aspect of the problem. OCARROT's powerful search functionality lets users input keywords, offering relevant problems in an instant.

### 4. **Full Control Over Your Posts**

![](https://lh3.googleusercontent.com/pw/AIL4fc8bVZT-tM2RlzH3_Rfn4rhIYQVO5znpKc1OmNF5njeAZswqoVEj4oXC67nJ5zkZUKGlc_39m-q7T3HhA6khkQY9phjMxtiVpJy5nlsXt48GVqBNEQQ=w2400)

![](https://lh3.googleusercontent.com/pw/AIL4fc-WF5eFUJPTEC9yCLzdec7I6gsLBrsd4cD0I76neXJWRQ2jebL2xRSoRwRQBMVcrKavsYbiDJTRdvTEtW6PlDUnKNdzZhY0RONXbuxVJ6kDnjeJqaE=w2400)


Posted a problem but realized you missed some details? Or perhaps you've found a more optimal solution? With OCARROT, users retain full control over their posts, allowing for edits and updates anytime. It ensures that the platform remains up-to-date and accurate, benefiting the entire community.


## A Deep Dive into OCARROT's Structure

Let's explore the underlying architecture that powers OCARROT:

### Database Tables and Relationships:

![](https://lh3.googleusercontent.com/pw/AIL4fc-Ty9SiRT-vXSiVE5UnMzUpvj1losK3KOrfOFsGqVs21wzAc95jDaDo_L_W84i-aIG_foUoq92Z6dBpYbzAE5KElnT5Q_vXKUFmVFeLf3Q2k670S9M=w2400)

- **User**
  - Contains details of every registered user.

- **Account**
  - Manages user authentication.
  - Related to `User` through `userId`.

- **Session**
  - Manages user sessions.
  - Related to `User` through `userId`.

- **Problem**
  - Lists all programming problems.
  - Related to `User` through `userId`.
  - Related to `Website` through `websiteId`.
  - Related to `Difficulty` through `difficultyId`.
  - Related to `EnglishLevel` through `englishLevelId`.

- **ProblemsOnTags**
  - Maps problems to algorithm tags.
  - Many-to-many relationship between `Problem` and `Tag`.
  
- **Tag**
  - Allows for tagging problems.

- **Website**
  - Records the source of each problem.
  
- **Difficulty & EnglishLevel**
  - Categorize problems.
  
- **FavoriteIds**
  - Keeps track of a user's favorite problems.
  - Related to `User` through `userId`.
  
- **Hint**
  - Provides valuable hints for problems.
  - Related to `Problem` through `problemId`.
  



<br><br><br>


# Core Technique


## 🔑 Infinite Scroll for problem list
<details>
<summary><i>Click to expand!</i></summary>

## Implementing Infinite Scroll in React

### Introduction

Infinite scrolling is a design pattern in which content is loaded continuously as the user scrolls down the page, eliminating the need for pagination. In this article, we'll walk through the implementation of infinite scrolling in a React component using the `react-intersection-observer` package.

### Infinite Scroll Component

The main component is `InfiniteProblemCards`, which is responsible for displaying problem cards and loading more when the user reaches the end of the list.

```jsx
const InfiniteProblemCards: React.FC<InfiniteProblemCardsProps> = ({ searchParams, currentUser }) => {
    const { problems, hasMore, setPage } = useFetchProblems({searchParams});
    const { ref, inView } = useInView({ threshold: 0 });
    
    useEffect(() => {
        if (inView && hasMore) {
            setPage(oldPage => oldPage + 1);
        }
    }, [inView, hasMore]);

    // Render problem cards here...

    return (
        //...
    );
};
```

Here's a breakdown of the code:

- `useFetchProblems`: A custom hook that fetches problems based on given search parameters.
- `useInView`: A hook from `react-intersection-observer` which gives us the `ref` and `inView` properties. The `ref` is attached to a div at the bottom of our list, and `inView` becomes `true` when this div becomes visible on the screen.
- `useEffect`: This effect checks if the div is in view and there are more problems to fetch. If both conditions are true, it increments the page number to fetch the next set of problems.

---

## Fetching Data for Infinite Scroll in React

### Introduction

Fetching data efficiently is crucial for a smooth infinite scrolling experience. In this article, we'll discuss the implementation of the `useFetchProblems` hook and the `getProblems` function, which together fetch problems based on search parameters.

### The useFetchProblems Hook

This custom hook manages the state of problems, the current page, and whether there are more problems to fetch.

```jsx
const useFetchProblems = ({ searchParams }: UseFetchProblemsProps) => {
    const [problems, setProblems] = useState<Problem[]>([]);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);

    useEffect(() => {
        const fetchProblems = async (page: number) => {
            // Fetch problems...
        };
      
        fetchProblems(page);
    }, [page, searchParams]);

    return { problems, hasMore, setPage };
};
```

The main responsibilities of this hook are:

- Maintain the `problems`, `page`, and `hasMore` states.
- Define a `fetchProblems` function inside a `useEffect` that fetches problems based on the current page and search parameters.

### The getProblems Function

This function constructs the appropriate API URL using the `query-string` library and fetches problems.

```jsx
const getProblems = async (query: Query = {}): Promise<Problem[]> => {
    const url = qs.stringifyUrl({
        url: URL,
        query: { /* ... */ },
    });

    const res = await fetch(url);
    return res.json();
};
```

The function takes a query object as an argument, which contains filtering parameters such as `websiteId`, `tagId`, etc. It then constructs a URL with these parameters and makes a GET request to fetch problems.

---

## Conclusion

Infinite scrolling provides a seamless experience for users by continuously loading content as they scroll. By combining the `react-intersection-observer` library with efficient data fetching techniques, we can easily implement this feature in React applications.

</details>


## 🔑 React Hook of action for favorite problem
<details>
<summary><i>Click to expand!</i></summary>

## Article: Implementing a "Favorite" Feature in React

### Introduction

One of the most common features in modern web applications is the ability for users to mark content as their "favorite". This interaction is often represented by a heart or star icon. In this article, we'll explore the implementation of a "favorite" feature for problems using Next.js, React, and Prisma.

### The Hook: `useFavorite`

The core logic for the favorite functionality is encapsulated in a custom React hook called `useFavorite`. This hook manages the state and actions related to favoriting a problem.

#### Key Features of `useFavorite`:

1. **State Management**: The hook maintains the state for whether a problem is favorited (`hasFavorited`) and if an API request is currently being made (`isLoading`).
   
2. **Toggle Logic**: The `toggleFavorite` function handles the logic for either adding or removing a problem from the user's favorites. 
   
3. **User Authentication**: If a user is not authenticated, they are prompted to log in when they attempt to favorite a problem.

```jsx
const useFavorite = ({ problemId, currentUser }: IUseFavorite) => {
  // ... state definitions ...

  const toggleFavorite = useCallback(async (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();

    if (!currentUser) {
      return loginModal.onOpen();
    }
    setIsLoading(true);
    try {
        let request;
  
        if (hasFavorited) {
          request = () => axios.delete(`/api/favorites/${problemId}`);
        } else {
          request = () => axios.post(`/api/favorites/${problemId}`);
        }
  
        await request();
        router.refresh();
        toast.success('Like this problem!');
      } catch (error) {
        toast.error('Something went wrong.');
      } finally {
        setIsLoading(false);
      }
  }, 
  [
    currentUser, 
    hasFavorited, 
    problemId, 
    loginModal,
    router
  ]);

  return {
    hasFavorited,
    toggleFavorite,
    isLoading,
  }
}
```

### The Component: `HeartButton`

The `HeartButton` component is a visual representation of the "favorite" feature. Users can click on it to either add or remove a problem from their favorites.

```jsx
const HeartButton: React.FC<HeartButtonProps> = ({ 
    problemId,
    currentUser
}) => {
  const { hasFavorited, toggleFavorite, isLoading } = useFavorite({
    problemId,
    currentUser
  });

  // ... render logic ...

  return (
    <div 
      onClick={toggleFavorite}
      className="..."
    >
      // ... icon display logic ..
      { isLoading ? 
        hasFavorited ? <div className="font-semibold">unsaving...</div> :
        <div className="font-semibold">saving...</div>  :
        (
          <>
            <AiOutlineLike
              size={32}
              className="
                fill-white
                absolute
                -top-[2px]
                -right-[2px]
              "
            />
            <AiFillLike
              size={28}
              className={hasFavorited ? 'fill-rose-500' : 'fill-neutral-500/70'}
            />
          </>
        )
      }
    </div>
   );
}
```

### API Endpoints: `POST` and `DELETE`

The favorite functionality relies on two key API endpoints:

1. **POST**: Adds a problem to the user's favorites.
2. **DELETE**: Removes a problem from the user's favorites.

These endpoints interact with a Prisma model named `FavoriteIds` that stores the relationships between users and their favorited problems.

```ts
model FavoriteIds{
  id           String    @id @default(uuid())
  favoriteId   String
  user         User     @relation(fields: [userId], references: [id], onDelete: Cascade)
  userId       String

  @@index([userId])
}
```

The `POST` endpoint creates a new record in the `FavoriteIds` table linking the user to the problem they favorited. The `DELETE` endpoint removes this record, effectively "unfavoriting" the problem for the user.

### Conclusion

Implementing a "favorite" feature in a web application enhances user engagement and provides a more personalized experience. By using Next.js for server-side logic, React for the frontend, and Prisma for database interactions, developers can create an efficient and user-friendly favorite feature. Whether it's articles, images, or problems, the strategy remains consistent: manage state, provide visual feedback, and handle data operations efficiently.

</details>


## Conclusion

OCARROT isn't just another competitive programming platform. It's a tool that recognizes the value of every problem and ensures that memorable challenges remain within easy reach. By bridging the gaps between various competitive programming websites and offering a curated experience, OCARROT is set to change the way we approach and remember programming challenges.

