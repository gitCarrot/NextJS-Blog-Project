---
title: "OCarrot"
subtitle: "Hub for competitive programming and collaborative online wrong-answer notebooks"
date: "2023-06-10"
---
> ### Official website Url->  [Visit Ocarrot](https://o-carrot.vercel.app/)

# OCARROT: Revolutionizing Competitive Programming with a Comprehensive Problem Archive

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

## Why OCARROT?

Every programmer has faced that moment when they recall a particularly challenging problem but can't remember where they encountered it. OCARROT's raison d'être is to eliminate this struggle. By allowing users to log and categorize problems, the platform ensures that no problem ever goes missing in the vast ocean of algorithms.

## A Deep Dive into OCARROT's Structure

Let's explore the underlying architecture that powers OCARROT:

### Database Tables and Relationships:

![](https://lh3.googleusercontent.com/pw/AIL4fc-Ty9SiRT-vXSiVE5UnMzUpvj1losK3KOrfOFsGqVs21wzAc95jDaDo_L_W84i-aIG_foUoq92Z6dBpYbzAE5KElnT5Q_vXKUFmVFeLf3Q2k670S9M=w2400)

- **Account**
  - Manages user authentication.
  - Related to `User` through `userId`.
  
- **Difficulty & EnglishLevel**
  - Categorize problems.
  
- **FavoriteIds**
  - Keeps track of a user's favorite problems.
  - Related to `User` through `userId`.
  
- **Hint**
  - Provides valuable hints for problems.
  - Related to `Problem` through `problemId`.
  
- **Problem**
  - Lists all programming problems.
  - Related to `User` through `userId`.
  - Related to `Website` through `websiteId`.
  - Related to `Difficulty` through `difficultyId`.
  - Related to `EnglishLevel` through `englishLevelId`.
  
- **ProblemsOnTags**
  - Maps problems to algorithm tags.
  - Many-to-many relationship between `Problem` and `Tag`.
  
- **Session**
  - Manages user sessions.
  - Related to `User` through `userId`.
  
- **Tag**
  - Allows for tagging problems.
  
- **User**
  - Contains details of every registered user.
  
- **Website**
  - Records the source of each problem.

## Conclusion

OCARROT isn't just another competitive programming platform. It's a tool that recognizes the value of every problem and ensures that memorable challenges remain within easy reach. By bridging the gaps between various competitive programming websites and offering a curated experience, OCARROT is set to change the way we approach and remember programming challenges.

