# Yield.xyz SDK

A TypeScript SDK for the **most complete API for integrating non-custodial, on-chain yield** — including staking, restaking, liquid staking, DeFi lending, RWA yields, vaults, and more across 70+ blockchain networks.

Originally developed as the backbone of Omni (one of the most advanced staking wallets in Web3), Yield.xyz now powers platforms like **Ledger, Zerion, and Tangem**, serving **4M+ users** and supporting **hundreds of millions in monthly volume**.

## Why Yield.xyz?

- **🔗 Unified Interface** — Every protocol and opportunity is abstracted into a consistent, schema-based format: one format for metadata, one for actions, one for balances
- **⚡ Instant Integration** — No need to write custom logic for Cosmos staking vs. Aave lending — integrate once, support everything
- **🔐 Self-Custodial by Design** — Transactions are returned fully constructed but never executed — you sign and broadcast using any infrastructure: wallets, smart contracts, or custody platforms
- **🏗️ Battle-Tested Infrastructure** — Built on the stack that powers millions of real-world transactions and billions in TVL
- **🔄 Composable** — Chain together multiple yields to build cross-chain workflows (e.g. bridge + stake + restake) in a single declarative call
- **🌐 Chain-Agnostic** — Works across EVM and non-EVM chains, including Ethereum, Cosmos, Tron, Solana, and more
- **💰 Monetizable** — Configure deposit, performance, and management fees or earn validator rebates directly in your integration
- **🎯 TypeScript First** — Full type safety with auto-generated types from OpenAPI spec
- **🧪 Testing Support** — Built-in MSW (Mock Service Worker) support for testing

## What You Can Build

- **💳 Wallets** — Add staking, DeFi flows with full control over UX, signing, and monetization
- **🏦 Custodians & Fintechs** — Offer on-chain yield on crypto or stablecoin balances with full transparency and fee control
- **🤖 AI Agents** — Query all available yield actions and execute optimal strategies using standard schemas
- **🔗 Aggregators & Infra** — Compose multi-step flows using a unified transaction model — no chain-specific code required

## Core Concepts

### Yields
Each yield represents an opportunity: staking, restaking, lending, vaults, or RWA strategies — with standardized metadata, reward mechanics, and execution logic across 70+ networks.

### Actions
Each yield supports consistent actions like `enter`, `exit`, and `manage`, using schema-based inputs. No matter if it's Ethereum staking or Cosmos delegation — the interface is the same.

### Balances
Retrieve unified views of user positions across all lifecycle stages: active, pending, cooldown, claimable, and more — all in a consistent format regardless of the underlying protocol.

### Protocols
Yields can be grouped under known brands or ecosystems (e.g. Aave, Cosmos, EigenLayer) for easy discovery and filtering.

## Installation

```bash
npm install @yieldxyz/sdk
# or
yarn add @yieldxyz/sdk
# or
pnpm add @yieldxyz/sdk
```

## Quick Start

### Configuration

```typescript
import { sdk } from '@yieldxyz/sdk';

sdk.configure({
  apiKey: 'your-api-key',
  baseURL: 'https://api.yield.xyz/', // Optional, defaults to this URL
});
```

### Basic Usage

```typescript
import { sdk } from '@yieldxyz/sdk';

// Configure the SDK first
sdk.configure({
  apiKey: 'your-api-key',
});

// Discover yield opportunities across all networks and protocols
const yields = await sdk.api.getYields({
  network: 'ethereum',
  limit: 10
});

// Get balances for a specific yield and address
const balances = await sdk.api.getYieldBalances('ethereum-lido-staking', {
  address: '0x1234567890123456789012345678901234567890',
  arguments: {}
});

// Enter a yield position (returns unsigned transactions)
const action = await sdk.api.enterYield({
  yieldId: 'ethereum-lido-staking',
  address: '0x1234567890123456789012345678901234567890',
  arguments: {
    amount: '1000000000000000000' // 1 ETH in wei
  }
});

// The transactions are ready to sign and broadcast with your preferred method
console.log(action.transactions); // Array of unsigned transactions
```

## API Reference

### Yield Discovery

#### Get All Yields
```typescript
const yields = await sdk.api.getYields({
  network?: string;        // Filter by network (ethereum, polygon, etc.)
  token?: string;          // Filter by token symbol or address
  inputToken?: string;     // Filter by input token
  provider?: string;       // Filter by provider
  limit?: number;          // Page size
  offset?: number;         // Pagination offset
});
```

#### Get Specific Yield
```typescript
const yieldDetails = await sdk.api.getYield('ethereum-lido-staking');
```

#### Get Yield Validators (for staking)
```typescript
const validators = await sdk.api.getYieldValidators('cosmos-staking', {
  limit?: 10,
  offset?: 0
});
```

### Balance Management

#### Get Yield Balances
```typescript
const balances = await sdk.api.getYieldBalances('ethereum-lido-staking', {
  address: '0x...',
  arguments?: object // Protocol-specific parameters
});
```

#### Get Aggregate Balances (multiple yields)
```typescript
const aggregateBalances = await sdk.api.getAggregateBalances({
  queries: [
    {
      yieldId: 'ethereum-lido-staking',
      address: '0x...',
      network: 'ethereum'
    },
    {
      yieldId: 'polygon-staking', 
      address: '0x...',
      network: 'polygon'
    }
  ]
});
```

### Action Execution

#### Enter Yield Position
```typescript
const enterAction = await sdk.api.enterYield({
  yieldId: 'ethereum-lido-staking',
  address: '0x...',
  arguments: {
    amount: '1000000000000000000'
  }
});
```

#### Exit Yield Position
```typescript
const exitAction = await sdk.api.exitYield({
  yieldId: 'ethereum-lido-staking',
  address: '0x...',
  arguments: {
    amount: '1000000000000000000'
  }
});
```

#### Manage Yield Position
```typescript
const manageAction = await sdk.api.manageYield({
  yieldId: 'ethereum-lido-staking',
  address: '0x...',
  action: 'CLAIM_REWARDS', // Available actions from balance.pendingActions
  passthrough: 'server-generated-passthrough', // From balance query
  arguments: {}
});
```

#### Get User Actions
```typescript
const actions = await sdk.api.getActions({
  address: '0x...',
  status?: 'CREATED' | 'PROCESSING' | 'SUCCESS' | 'FAILED',
  intent?: 'enter' | 'exit' | 'manage',
  yieldId?: 'ethereum-lido-staking',
  limit?: 10,
  offset?: 0
});
```

#### Get Action Details
```typescript
const action = await sdk.api.getAction('action-id');
```

### Transaction Management

#### Submit Transaction Hash
```typescript
const transaction = await sdk.api.submitTransactionHash(
  'transaction-id',
  {
    hash: '0x...' // After broadcasting the transaction
  }
);
```

#### Get Transaction Details
```typescript
const transaction = await sdk.api.getTransaction('transaction-id');
```

### Network & Provider Discovery

#### Get Networks
```typescript
const networks = await sdk.api.getNetworks();
```

#### Get Providers
```typescript
const providers = await sdk.api.getProviders({
  limit?: 10,
  offset?: 0
});
```

#### Get Provider Details
```typescript
const provider = await sdk.api.getProvider('lido');
```

### Health Check

#### Get API Health Status
```typescript
const healthStatus = await sdk.api.health();
```

## Advanced Configuration

### Custom Fetch Instance

You can provide your own fetch implementation for custom request handling:

```typescript
import { sdk, type FetchInstance } from '@yieldxyz/sdk';

const customFetch: FetchInstance = async <T>(url: string, init: RequestInit): Promise<T> => {
  // Custom fetch logic (e.g., retry, logging, etc.)
  const response = await fetch(url, init);

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.json();
};

sdk.configure({
  apiKey: 'your-api-key',
  baseURL: 'https://api.yield.xyz/',
  fetchInstance: customFetch
});
```

## Testing

The SDK includes MSW (Mock Service Worker) support for testing:

```typescript
import { setupServer } from 'msw/node';
import { getYieldXyzAPIMock } from '@yieldxyz/sdk/msw';

const server = setupServer(...getYieldXyzAPIMock());

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
```

## Type Safety

The SDK provides full TypeScript support with auto-generated types:

```typescript
import { sdk } from '@yieldxyz/sdk';
import type {
  YieldDto,
  ActionDto,
  BalancesResponseDto,
  NetworkDto
} from '@yieldxyz/sdk';

// All API responses are fully typed
const handleYieldData = (yield: YieldDto) => {
  console.log(yield.id, yield.metadata.name);
  console.log(yield.rewardRate.total); // Fully typed reward information
  console.log(yield.mechanics.type); // staking | restaking | lending | vault | etc.
};
```

## Error Handling

The SDK will throw an error if you try to use the API without configuring it first:

```typescript
import { sdk } from '@yieldxyz/sdk';

try {
  // This will throw an error if not configured
  const yields = await sdk.api.getYields();
} catch (error) {
  console.error('SDK not configured:', error.message);
}

// Configure first
sdk.configure({ apiKey: 'your-api-key' });

// Now API calls will work
const yields = await sdk.api.getYields();
```

## Development

```bash
# Install dependencies
pnpm install

# Generate API client from OpenAPI spec
pnpm run generate-api

# Build the SDK
pnpm run build

# Run linting
pnpm run lint

# Format code
pnpm run format
```

## Getting an API Key

To get started with Yield.xyz:

1. Visit [docs.yield.xyz](https://docs.yield.xyz/) to learn more about the platform
2. Contact the Yield.xyz team to get your API key and discuss your use case
3. Review the [official documentation](https://docs.yield.xyz/) for comprehensive guides and examples

## License

ISC

## Documentation & Support

For comprehensive guides, API reference, and detailed examples, visit the [official Yield.xyz documentation](https://docs.yield.xyz/).

For support and partnerships:
- Email: [support@yield.xyz](mailto:support@yield.xyz)
- Documentation: [docs.yield.xyz](https://docs.yield.xyz/)

---

**Welcome to the yield layer of Web3** 🌱
