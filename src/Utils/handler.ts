export const errorHandler = (err: any) => {
    const errMsg =
        err?.response?.data?.message ||
        err?.response?.data?.error?.message ||
        err?.data?.message ||
        'Something went wrong'

    return errMsg
}

export const responseHandler = (res: any) => {
    if (res.status === 200 || res.status === 201) {
        res.data.success = true
    } else {
        res.data.success = false
    }

    return res.data
}

export const errorResponseHandler = (err: any) => {
    if (err.response.status == 403) {
    }
    return err
}

export const isOwed = (type: string) => {
    switch (type) {
        case 'lend_full':
            return true
        case 'lend_half':
            return true
        case 'borrowed_full':
            return false
        case 'borrowed_half':
            return false
    }
}
