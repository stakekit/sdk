# Yield.xyz SDK

A TypeScript SDK for interacting with the Yield.xyz API, providing access to DeFi yield opportunities across multiple blockchain networks.

## Features

- 🔗 **Multi-chain Support**: Access yield opportunities across various blockchain networks
- 📊 **Yield Management**: Enter, exit, and manage yield positions programmatically
- 💰 **Balance Tracking**: Monitor your balances across different protocols and networks
- 🔍 **Discovery**: Find and filter yield opportunities by network, protocol, and other criteria
- 🛠️ **Transaction Management**: Generate and track blockchain transactions
- 🎯 **TypeScript First**: Full type safety with auto-generated types from OpenAPI spec
- 🧪 **Testing Support**: Built-in MSW (Mock Service Worker) support for testing

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
  baseURL: 'https://api.stakek.it/', // Optional, defaults to this URL
});
```

### Basic Usage

```typescript
import { sdk } from '@yieldxyz/sdk';

// Configure the SDK first
sdk.configure({
  apiKey: 'your-api-key',
});

// Discover yield opportunities
const yields = await sdk.api.yieldsGetYields({
  network: 'ethereum',
  limit: 10
});

// Get balances for a specific yield and address
const balances = await sdk.api.yieldsGetYieldBalances('yield-id', {
  address: '0x1234567890123456789012345678901234567890',
  arguments: {}
});

// Enter a yield position
const action = await sdk.api.actionsEnterYield({
  yieldId: 'yield-id',
  address: '0x1234567890123456789012345678901234567890',
  arguments: {
    amount: '1000000000000000000' // 1 ETH in wei
  }
});
```

## API Reference

### Yields

#### Get All Yields
```typescript
const yields = await sdk.api.yieldsGetYields({
  network?: string;
  limit?: number;
  offset?: number;
});
```

#### Get Specific Yield
```typescript
const yieldDetails = await sdk.api.yieldsGetYield('yield-id');
```

#### Get Yield Balances
```typescript
const balances = await sdk.api.yieldsGetYieldBalances('yield-id', {
  address: '0x...',
  arguments?: object
});
```

#### Get Aggregate Balances
```typescript
const aggregateBalances = await sdk.api.yieldsGetAggregateBalances({
  requests: [
    {
      yieldId: 'yield-id-1',
      address: '0x...',
      network: 'ethereum'
    },
    {
      yieldId: 'yield-id-2',
      address: '0x...',
      network: 'polygon'
    }
  ]
});
```

### Actions

#### Enter Yield Position
```typescript
const enterAction = await sdk.api.actionsEnterYield({
  yieldId: 'yield-id',
  address: '0x...',
  arguments: {
    amount: '1000000000000000000'
  }
});
```

#### Exit Yield Position
```typescript
const exitAction = await sdk.api.actionsExitYield({
  yieldId: 'yield-id',
  address: '0x...',
  arguments: {
    amount: '1000000000000000000'
  }
});
```

#### Manage Yield Position
```typescript
const manageAction = await sdk.api.actionsManageYield({
  yieldId: 'yield-id',
  address: '0x...',
  action: 'claim', // or other management actions
  arguments: {}
});
```

#### Get Actions
```typescript
const actions = await sdk.api.actionsGetActions({
  address: '0x...',
  status?: 'pending' | 'completed' | 'failed',
  yieldId?: 'yield-id',
  limit?: 10,
  offset?: 0
});
```

#### Get Action Details
```typescript
const action = await sdk.api.actionsGetAction('action-id');
```

### Transactions

#### Submit Transaction Hash
```typescript
const transaction = await sdk.api.transactionsSubmitTransactionHash(
  'transaction-id',
  {
    hash: '0x...'
  }
);
```

#### Get Transaction Details
```typescript
const transaction = await sdk.api.transactionsGetTransaction('transaction-id');
```

### Networks & Providers

#### Get Networks
```typescript
const networks = await sdk.api.networksGetNetworks();
```

#### Get Providers
```typescript
const providers = await sdk.api.providersGetProviders({
  limit?: 10,
  offset?: 0
});
```

#### Get Provider Details
```typescript
const provider = await sdk.api.providersGetProvider('provider-id');
```

### Validators

#### Get Yield Validators
```typescript
const validators = await sdk.api.yieldsGetYieldValidators('yield-id', {
  limit?: 10,
  offset?: 0
});
```

### Health Check

#### Get Health Status
```typescript
const healthStatus = await sdk.api.healthHealth();
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
  baseURL: 'https://api.stakek.it/',
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
};
```

## Error Handling

The SDK will throw an error if you try to use the API without configuring it first:

```typescript
import { sdk } from '@yieldxyz/sdk';

try {
  // This will throw an error if not configured
  const yields = await sdk.api.yieldsGetYields();
} catch (error) {
  console.error('SDK not configured:', error.message);
}

// Configure first
sdk.configure({ apiKey: 'your-api-key' });

// Now API calls will work
const yields = await sdk.api.yieldsGetYields();
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

## License

ISC

## Documentation & Support

For comprehensive guides, API reference, and detailed examples, visit the [official Yield.xyz documentation](https://docs.yield.xyz/docs/getting-started).

For support, please contact the Yield.xyz team or refer to the official documentation.
