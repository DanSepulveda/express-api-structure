import { ReactNode, createContext, useContext } from 'react'

interface Theme {
  sxButton: {
    base: string
    variants: Record<string, string>
  }
  sxHeading: {
    base: string
    variants: Record<string, string>
  }
  sxText: {
    base: string
    variants: Record<string, string>
  }
  sxStack: {
    base: string
    variants: Record<string, string>
  }
  sxContainer: {
    base: string
    variants: Record<string, string>
  }
  sxBox: {
    base: string
    variants: Record<string, string>
  }
  sxGridContainer: {
    base: string
    variants: Record<string, string>
  }
  sxGridItem: {
    base: string
    variants: Record<any, any>
  }
  sxInput: {
    base: string
    variants: {
      [key: string]: {
        onInputSuccess: string
        onInputError: string
        label: string
        decorator: {
          info: string
          required: string
        }
        error: string
      }
    }
  }
  sxForm: {
    base: string
    fieldset: string
    legend: string
    grid: string
    controls: string
  }
}

const ThemeContext = createContext<Theme | null>(null)

export const createTheme = (theme: Theme) => {
  return theme
}

export const useThemeContext = () => useContext(ThemeContext) as Theme

export const ThemeProvider = ({
  children,
  theme,
}: {
  children: ReactNode
  theme: Theme
}) => {
  return (
    <ThemeContext.Provider value={{ ...theme }}>
      {children}
    </ThemeContext.Provider>
  )
}
