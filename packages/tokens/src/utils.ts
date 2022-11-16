export const utils = {
  m: (value: string | number) => ({
    margin: value,
  }),
  mt: (value: string | number) => ({
    marginTop: value,
  }),
  mr: (value: string | number) => ({
    marginRight: value,
  }),
  mb: (value: string | number) => ({
    marginBottom: value,
  }),
  ml: (value: string | number) => ({
    marginLeft: value,
  }),
  mx: (value: string | number) => ({
    marginLeft: value,
    marginRight: value,
  }),
  my: (value: string | number) => ({
    marginTop: value,
    marginBottom: value,
  }),
  p: (value: string | number) => ({
    padding: value,
  }),
  pt: (value: string | number) => ({
    paddingTop: value,
  }),
  pr: (value: string | number) => ({
    paddingRight: value,
  }),
  pb: (value: string | number) => ({
    paddingBottom: value,
  }),
  pl: (value: string | number) => ({
    paddingLeft: value,
  }),
  px: (value: string | number) => ({
    paddingLeft: value,
    paddingRight: value,
  }),
  py: (value: string | number) => ({
    paddingTop: value,
    paddingBottom: value,
  }),
  size: (value: string | number) => ({
    width: value,
    height: value,
  }),
}
