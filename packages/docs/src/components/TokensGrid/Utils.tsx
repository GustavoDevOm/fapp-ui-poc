import './styles.css'

interface UtilsGridProps {
  tokens: Record<string, Function>
}

export const UtilsGrid = ({ tokens }: UtilsGridProps) => (
  <table className="tokens-grid">
    <thead>
      <tr>
        <th>Name</th>
        <th>Value</th>
      </tr>
    </thead>

    <tbody>
      {Object.entries(tokens).map(([key, value]) => (
        <tr key={key}>
          <td>{key}</td>
          <td>
            {Object.keys(value())
              .toString()
              .split(/\.?(?=[A-Z])/)
              .join('-')
              .toLowerCase()
              .replace(',', ' + ')}
          </td>
        </tr>
      ))}
    </tbody>
  </table>
)
