// test-setup.ts - файл настройки тестовой среды
import { expect, afterEach } from 'vitest'
import { cleanup } from '@testing-library/react'
import * as matchers from '@testing-library/jest-dom/matchers'

// Добавляем matchers из Testing Library в expect
expect.extend(matchers)

// Автоматически очищаем DOM после каждого теста
afterEach(() => {
  cleanup()
})