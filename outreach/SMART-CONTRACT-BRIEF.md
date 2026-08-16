# Smart Contract Brief: Transparency Without Financialization

**Status:** design brief only. No contract is deployed or soliciting funds.

## Objective

Use cryptographic tools only where they improve public auditability or shared control. The first version should have no token, no market, no yield, no automated grant distribution, and no personal data on-chain.

## Potential phase-one pattern

| Component | Purpose | Must be public |
| --- | --- | --- |
| Decision registry | Time-stamp a hash of an adopted decision record and link to its public source file | Hash, record ID, version, source URL |
| Budget registry | Record approved project budgets and milestone references | Budget ceiling, purpose, decision reference |
| Multi-signature wallet | Require multiple authorized approvers for a defined project disbursement | Signer policy, approval threshold, transactions |
| Evidence index | Link off-chain sources and deliverables to the relevant decision or budget item | Source URLs and version identifiers |

## Preconditions before any deployment

1. Written legal analysis of entity, donation, tax, securities, campaign-finance, sanctions, privacy, and custody implications.
2. A public governance decision specifying the narrow purpose, signer-selection process, removal and recovery controls, and jurisdiction.
3. Independent security review, testnet use, key-management plan, incident plan, and plain-language public documentation.
4. A clear statement that the mechanism confers no ownership, financial return, voting power, or entitlement to project funds.

## Explicit exclusions

Do not issue a governance token, conduct a token sale, market expected appreciation, pool capital for profit, promise yield, or automate funding based on unverified voting or identity claims. Those choices can create serious legal, security, and consumer-protection risk and are outside this project’s founding scope.

## Success test

If an ordinary member cannot understand where a decision came from, who may authorize a disbursement, what the money was for, and where to challenge an error, the system has failed its public-accountability purpose.
