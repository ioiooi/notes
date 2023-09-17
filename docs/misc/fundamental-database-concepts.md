# Fundamental Database Concepts

## ACID (Atomicity, Consistency, Isolation, Durability)

[ACID](https://en.wikipedia.org/wiki/ACID)

ACID is a set of properties that guarantee the reliability of database transactions. Each letter in ACID stands for a different property:

- Atomicity: This property ensures that a transaction is treated as a single, indivisible unit. It either fully succeeds or fully fails. There's no in-between state. For example, consider transferring money between two bank accounts. If the transfer fails at any point, the entire transaction is rolled back.

- Consistency: It ensures that a transaction brings the database from one consistent state to another. In other words, the database starts in a consistent state, and after the transaction, it remains consistent. For example, if you have a database storing inventory, a sale transaction should not allow the sale of more items than are in stock.

- Isolation: This property ensures that concurrent transactions do not interfere with each other. Transactions should be executed in isolation, as if they were the only ones in progress. For example, if two users simultaneously update the same bank account, their transactions should not interfere with each other.

- Durability: It guarantees that once a transaction is committed, its effects are permanent and will survive system crashes or failures. For example, if a user updates their email address in a database, that change should persist even if the server crashes immediately after the update.

## BASE (Basically Available, Soft state, Eventually consistent)

[BASE](https://en.wikipedia.org/wiki/Eventual_consistency)

BASE is an alternative set of principles for designing distributed databases, often contrasted with ACID. It stands for:

- Basically Available: This means that the system should remain operational even in the face of failures. It may not provide immediate or guaranteed consistency but should return some response even if it's not the most up-to-date.

- Soft state: The state of the system can change over time due to eventual consistency, which means it may not always reflect the latest data. This soft state is acceptable as long as it eventually converges to a consistent state.

- Eventually consistent: Unlike ACID's strong consistency, BASE systems focus on eventual consistency. It acknowledges that in a distributed system, it might take some time for all nodes to reach a consistent state after an update. Users may temporarily see different views of the data.

## CAP Theorem (Consistency, Availability, Partition tolerance)

[CAP theorem](https://en.wikipedia.org/wiki/CAP_theorem)

The CAP theorem is a concept that relates to distributed database systems and states that in a distributed system, you can achieve at most two out of three properties:

- Consistency: All nodes in the system see the same data simultaneously. In other words, every read receives the most recent write.

- Availability: Every request made to the system receives a response, without guaranteeing that it contains the most recent data.

- Partition tolerance: The system continues to operate even in the presence of network partitions or communication failures.

The CAP theorem suggests that in a distributed system, you must make trade-offs between these properties. For example, if you prioritize consistency and partition tolerance, availability may suffer during network partitions.

## [Serialization](https://en.wikipedia.org/wiki/Serialization)

## Books

[Patterns of Enterprise Application Architecture - Martin Fowler](https://www.amazon.com/Patterns-Enterprise-Application-Architecture-Martin/dp/0321127420)

[NoSQL Distilled](https://www.goodreads.com/book/show/13610343-nosql-distilled)
